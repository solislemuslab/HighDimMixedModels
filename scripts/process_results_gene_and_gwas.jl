using HighDimMixedModels
using Serialization
using CSV
using DataFrames

#Change to false to process gene expression simulations instead
GWAS = true

#Matrix to store result for best lambda
coef_cols =  GWAS ? 1001 : 1000
rows = GWAS ? 200*10 : 200*28
best_results = Matrix{Any}(undef, 200*10, 9+25+coef_cols)

#Get names of serialized files
dir_path =  GWAS ? "sim_results/gwas/" : "sim_results/"
setting_names = readdir(dir_path)
setting_names = setting_names[endswith.(setting_names, "results.txt")]


global i = 1 #Index of next row to fill in in best_results
#Iterate through each setting
for setting_name in setting_names
    
    setting = open(dir_path*setting_name, "r")
    all_setting_results = deserialize(setting)

    # How many true non-zero parameters are there? 
    # Note, all true non-zeros come at the beginning of the coefficient vector
    
    if !GWAS
        pattern = r"nz(\d+)"
        true_nz = parse(Int, match(pattern, setting_name).captures[1])
    else 
        true_nz = 10
    end

    #Iterate through each data file in the setting
    for row in eachrow(all_setting_results)
        
        data_id = replace(row[1], ".csv" => "")
        data_results = row[2:end]

        # Filter out fits that resulted in errors
        data_good_results = filter(x -> !isa(x, String), data_results)

        # Sort rows and extract best results
        data_sorted_results = sort(data_good_results, by = x -> x.bic)
        k = min(length(data_sorted_results), 2)
        data_best_results = data_sorted_results[1:k]
        
        #Add a single row to the best_results matrix for each row in data_best_results
        for result in data_best_results

            # Get number of true positives
            nz_ind = findall(result.fixef .!= 0)
            tp = length(intersect(nz_ind, 1:true_nz))

            # Remove suffix from setting_name
            setting_name = replace(setting_name, ".txt" => "")

            # Create row to get added to matrix of best results
            added_row = [setting_name, data_id, result.λ, result.log_like, result.aic, result.bic, result.nz, tp, sqrt(result.σ²)]
            
            # Add psi
            vec_ψ = vec(result.ψ)
            added_row = [added_row; vec_ψ; fill(missing, 25-length(vec_ψ))]

            # Add beta estimates
            added_row = [added_row; result.fixef; fill(missing, coef_cols - length(result.fixef))]

            # Add row to matrix of best results
            best_results[i,:] = added_row
            global i = i+1
        end
    end
    close(setting)
end

#Create dataframe
colnames = ["setting" ; "data_id"; "lambda"; "loglike"; "aic"; "bic"; "n_nz"; "tp"; "sigma"; 
            ["psi_$i" for i in 1:25]; ["beta_$i" for i in 1:coef_cols]]
best_results = DataFrame(best_results[1:i-1,:], colnames)

# Define the output file name 
file_path = GWAS ? "sim_results/gwas/best_results.csv" : "sim_results/best_results.csv"

# Write the data to file
CSV.write(file_path, best_results)









