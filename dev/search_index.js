var documenterSearchIndex = {"docs":
[{"location":"lib/internal_methods/","page":"Internal Methods and Types","title":"Internal Methods and Types","text":"Modules = [HighDimMixedModels]\nPublic = false","category":"page"},{"location":"lib/internal_methods/#HighDimMixedModels.L_scalar_update-NTuple{6, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.L_scalar_update","text":"L_ident_update(XGgrp, ygrp, Zgrp, β, σ², control)\n\nUpdate of L for identity covariance structure\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.L_update!-Tuple{AbstractMatrix, Vararg{Any, 7}}","page":"Internal Methods and Types","title":"HighDimMixedModels.L_update!","text":"L_update!(L::Matrix, XGgrp, ygrp, Zgrp, β, σ², coords, control)\n\nUpdate of entry (coords[1], coords[2]) of matrix L, the lower traiangular Choelsky factor of the random effects covariance matrix\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.L_update!-Tuple{AbstractVector, Vararg{Any, 7}}","page":"Internal Methods and Types","title":"HighDimMixedModels.L_update!","text":"L_update!(L::AbstractVector, XGgrp, ygrp, Zgrp, β, σ², s, control)\n\nUpdate of coordinate s of L for diagonal covariance structure\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.armijo!-Tuple{Any, Any, Any, Any, Any, Any, Any, Real, Real, Vararg{Any, 6}}","page":"Internal Methods and Types","title":"HighDimMixedModels.armijo!","text":"armijo!(\n    XGgrp,\n    ygrp,\n    invVgrp,\n    β,\n    j,\n    q,\n    cut,\n    hessj_untrunc::Real,\n    hessj::Real,\n    penalty,\n    λ,\n    a,\n    fct_old,\n    arm_con,\n    control,\n)\n\nPerforms Armijo line search to update jth component of β, i.e. β[j]\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.cov_start-NTuple{4, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.cov_start","text":"cov_start(XGgrp, ygrp, Zgrp, β)\n\nGet MLE estimates of L and σ² assuming β are the true fixed effects.\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.get_cost","page":"Internal Methods and Types","title":"HighDimMixedModels.get_cost","text":"get_cost(negll, βpen, penalty, λpen, scada = 3.7)\n\nCalculate the objective function\n\n\n\n\n\n","category":"function"},{"location":"lib/internal_methods/#HighDimMixedModels.get_negll-NTuple{4, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.get_negll","text":"get_negll(invVgrp, ygrp, XGgrp, β)\n\nCalculate the negative log-likelihod -l(ϕ̃) = -l(β, θ, σ²) = .5(N*log(2π) + log|V| + (y-xβ)'V⁻¹(y-Xβ)) \n\nArguments\n\ninvVgrp :: Vector of length the number of groups, each of whose elements is the precision matrix of the responses within a group\nygrp :: Vector of vector of responses for each group\nX :: Vector of fixed effect design matrices for each group\nβ :: Fixed effects\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.get_scad","page":"Internal Methods and Types","title":"HighDimMixedModels.get_scad","text":"get_scad(βpen::Union{Number, Array{Number}}, λ, a = 3.7)\n\nCalculate the SCAD penalty\n\n\n\n\n\n","category":"function"},{"location":"lib/internal_methods/#HighDimMixedModels.hessian_diag!-NTuple{5, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.hessian_diag!","text":"hessian_diag!(XGgrp, invVgrp, active_set, hess, mat_act)\n\nCalculate active_set entries of the diagonal of Hessian matrix for fixed effect parameters \n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.invV!-NTuple{4, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.invV!","text":"invV!(invVgrp, Zgrp, L, σ²)\n\nUpdate precision matrices of the responses, by group, by modifying invVgrp in place.\n\nArguments\n\ninvVgrp :: Container for precision matrices of the responses, by group\nZgrp :: Container of random effects design matrices, by group\nL :: Parameters for random effect covariance matrix (can be scalar, vector, or lower triangular matrix)\nσ² :: Variance of error\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.scad_dir-NTuple{5, Real}","page":"Internal Methods and Types","title":"HighDimMixedModels.scad_dir","text":"scad_dir(βj::Real, hessj::Real, grad::Real, λj::Real, a::Real)\n\nCalculates descent direction with SCAD penalty\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.scad_solution-NTuple{4, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.scad_solution","text":"scad_solution(cut, hess, λ, a)\n\nGets analytical solution for CGD iterate with SCAD penalty when the Hessian hasn't been truncated \n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.special_quad-NTuple{7, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.special_quad","text":"special_quad(XG, y, β, j, invVgrp, XGgrp, grp)\n\nCalculate (y-ỹ)' * invV * X[:,j], where ỹ are the fitted values if we ignored the jth column i.e. XG[:,Not(j)] * β[Not(j)] To improve perforamce, we calculate ỹ at once with the entire dataset. We then split into groups and calculate (y-ỹ)' * invV * X[:,j] for each group\n\n\n\n\n\n","category":"method"},{"location":"lib/internal_methods/#HighDimMixedModels.σ²update-NTuple{6, Any}","page":"Internal Methods and Types","title":"HighDimMixedModels.σ²update","text":"σ²update(XGgrp, ygrp, Zgrp, β, L, control)\n\nUpdate the variance component parameter σ² using profile likelihood optimization.\n\n\n\n\n\n","category":"method"},{"location":"lib/public_methods/","page":"Public Methods and Types","title":"Public Methods and Types","text":"Modules = [HighDimMixedModels]\nPrivate = false","category":"page"},{"location":"lib/public_methods/#HighDimMixedModels.Control","page":"Public Methods and Types","title":"HighDimMixedModels.Control","text":"Control\n\nHyperparameters for the coordinate descent algorithm\n\nFields\n\ntol: Small positive number, default is 1e-4, providing convergence tolerance\nseed: Random seed, default 770. Note that the only randomness in the algorithm is during the initialization of fixed effect parameters (for the data splits in the cross validation)\ntrace: Bool, default false. If true, prints cost and size of active set over the course of the algorithm.\nmax_iter: Integer, default 1000, giving maximum number of iterations in the coordinate gradient descent.\nmax_armijo: Integer, default 20, giving the maximum number of steps in the Armijo algorithm. If the maximum is reached, algorithm doesn't update current coordinate and proceeds to the next coordinate\nact_num: Integer, default 5. We will only update all of the fixed effect parameters every act_num iterations. Otherwise, we update only the parameters in the current active set.\na₀: a₀ in the Armijo step, default 1.0. See Schelldorfer et al. (2010) for details about this and the next five fields.\nδ: δ in the Armijo step, default 0.1. \nρ: ρ in the Armijo step, default 0.001. \nγ: γ in the Armijo step, default 0.0. \nlower: Lower bound for the Hessian, default 1e-6. \nupper: Upper bound for the Hessian, default 1e8.\nvar_int: Tuple with bounds of interval on which to optimize when updating a diagonal entry of L, default (0, 100). See Optim.jl in section \"minimizing a univariate function on a bounded interval\"\ncov_int: Tuple with bounds of interval on which to optimize the when updating a non-diagonal entry of L, default (-50, 50). See Optim.jl in section \"minimizing a univariate function on a bounded interval\"\noptimize_method: Symbol denoting method for performing the univariate optimization, either :Brent or :GoldenSection, default is :Brent\nthres: If an update to a diagonal entry of L is smaller than thres, the parameter is set to 0\n\n\n\n\n\n","category":"type"},{"location":"lib/public_methods/#HighDimMixedModels.HDMModel","page":"Public Methods and Types","title":"HighDimMixedModels.HDMModel","text":"HDMModel\n\nResults of a fitted model\n\nFields\n\ndata: NamedTuple containing the input data used for fitting the model\nweights: Vector of penalty weights used in the model\ninit_coef: NamedTuple containing the initial coefficient values\ninit_log_like: Initial log-likelihood value\ninit_objective: Initial objective function value\ninit_nz: Number of non-zero components in the initial estimate of fixed effects\npenalty: String indicating the type of penalty used in the model\nstandardize: Boolean indicating whether the input data was standardized\nλ: Regularization hyperparameter \nscada: Hyperparameter relevant to the scad penalty\nσ²: Estimated variance parameter\nL: Lower triangular matrix representing the Cholesky factor of the random effect covariance matrix\nfixef: Vector of estimated fixed effects\nranef:  vector of g vectors, each of length m, holding random effects BLUPs for each group\nfitted: Vector of fitted values, including random effects\nresid: Vector of residuals, including random effects\nlog_like: Log-likelihood value at convergence\nobjective: Objective function value at convergence\nnpar: Total number of parameters in the model\nnz: Number of non-zero fixed effects\ndeviance: Deviance value\nnum_arm: Number of times armijo! needed to be called \narm_con: Number of times the Armijo algorithm failed to converge\naic: Akaike Information Criterion\nbic: Bayesian Information Criterion\niterations: Number of iterations performed\nψstr: Assumed structure of the random effect covariance matrix\nψ: Estimated random effect covariance matrix, i.e. L * L'\ncontrol: Control object containing hyperparameters that were used for the coordinate descent algorithm\n\n\n\n\n\n","category":"type"},{"location":"lib/public_methods/#HighDimMixedModels.hdmm","page":"Public Methods and Types","title":"HighDimMixedModels.hdmm","text":"hdmm(X::Matrix{<:Real}, G::Matrix{<:Real}, y::Vector{<:Real}, \n     grp::Vector{<:Union{String, Int64}}, Z::Matrix{<:Real}=X; \n     <keyword arguments>)\n\nFit a penalized linear mixed effect model using the coordinate gradient descent (CGD)  algorithm and return a fitted model of type HDMModel. \n\nArguments\n\nX: Low dimensional (N by q) design matrix for unpenalized fixed effects (first column must be all 1's to fit intercept) \nG: High dimensional (N by p) design matrix for penalized fixed effects (should not include column of 1's) \ny: Length N response vector\ngrp: Length N vector with group assignments of each observation \nZ=X: Random effects design matrix (N by m), should contain some subset of the columns of X (defaults to equal X)\n\nKeyword: \n\npenalty::String=\"scad\": Either \"scad\" or \"lasso\"\nstandardize::Bool=true: Whether to standardize the columns of all design matrices before performing coordinate descent. The value of λ (and wts) should be chosen accordingly. Estimates will be returned to the original scale at the end.\nλ::Real=10.0: Positive number providing the regularization parameter for the penalty\nwts::Union{Vector,Nothing}=nothing: If specified, the penalty on covariate j will be λ/wⱼ, so this argument is useful if you want to penalize some covariates more than others. \nscada::Real=3.7: Positive number providing the extra tuning parameter for the scad penalty (ignored for lasso)\nmax_active::Real=length(y)/2: Maximum number of fixed effects estimated non-zero (defaults to half the total sample size)\nψstr::String=\"diag\": One of \"ident\", \"diag\", or \"sym\", specifying the structure of the random effects' covariance matrix \ninit_coef::Union{Tuple,Nothing} = nothing: If specified, provides the initialization to the algorithm. See notes below for more details\ncontrol::Control = Control(): Custom struct with hyperparameters of the CGD algorithm, defaults are in documentation of Control struct\n\nNotes\n\nThe initialization to the descent algorithm can be specified in the init_coef argument as a tuple of the form (β, L, σ²), where\n\nβ is a vector of length p + q providing an initial estimate of the fixed effect coefficients\nL is the Cholesky factor of the random effect covariance matrix, and is represented as \na scalar if ψstr=\"ident\"\na vector of length m if ψstr=\"diag\"\na lower triangular matrix of size m by m if ψstr=\"sym\"\nσ² is a scalar providing an initial estimate of the noise variance\n\nIf the init_coef argument is not specified, we obtain initial parameter estimates in the following manner:\n\nA LASSO that ignores random effects (with λ chosen using cross validation) is performed to estimate the fixed effect parameters. \nL, assumed temporarilly to be a scalar, and σ² are estimated to maximize the likelihood given these estimated fixed effect parameters.\nIf ψstr is \"diag\" or \"sym\", the scalar L is converted to a vector or matrix by repeating the scalar or filling the diagonal of a matrix with the scalar, respectively.\n\n\n\n\n\n","category":"function"},{"location":"lib/public_methods/#StatsAPI.coeftable","page":"Public Methods and Types","title":"StatsAPI.coeftable","text":"coeftable(fit::HDMModel, names::Vector{String}=string.(1:length(fit.fixef)))\n\nReturn a table of the selected coefficients, i.e. those not set to 0, from the model.\n\nArguments\n\nfit::HDMModel: A fitted model.\nnames::Vector{String}: Names of the all the coefficients in the model (not just those selected), defaults to integer names \n\nReturns\n\nA StatsBase.CoefTable object.\n\n\n\n\n\n","category":"function"},{"location":"lib/public_methods/#StatsAPI.fitted-Tuple{HDMModel}","page":"Public Methods and Types","title":"StatsAPI.fitted","text":"fitted(fit::HDMModel)\n\nAccounts for the random effects in generating predictions\n\n\n\n\n\n","category":"method"},{"location":"lib/public_methods/#StatsAPI.residuals-Tuple{HDMModel}","page":"Public Methods and Types","title":"StatsAPI.residuals","text":"residuals(fit::HDMModel)\n\nAccounts for the random effects in generating predictions\n\n\n\n\n\n","category":"method"},{"location":"man/example/#Example","page":"Example","title":"Example","text":"","category":"section"},{"location":"man/example/#Load-dataset","page":"Example","title":"Load dataset","text":"","category":"section"},{"location":"man/example/","page":"Example","title":"Example","text":"The cognitive dataset contains data from a study of the effect of an intervention in school lunches among schools in Kenya, accessed via the R package splmm. The data is longitudinal with measurements of students' performance on various tests taken at different points in time. We will fit a model with random intercepts and random growth slopes for each student. Note that while this is a low-dimensional example (p  n), the algorithm that this package implements was designed and tested with the high dimensional use-case (p  n) in mind.","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"First, we load the data into Julia and form a categorical variable for the treatment in the study, which was the type of lunch served (assigned at the school level).","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"using CSV\nusing DataFrames\nusing CategoricalArrays\ncog_df = CSV.read(\"../data/cognitive.csv\", DataFrame)\n# form categorical variable for treatment\ncog_df.treatment = categorical(cog_df.treatment, levels=[\"control\", \"calorie\", \"meat\", \"milk\"])\nnothing # hide","category":"page"},{"location":"man/example/#Extract-model-matrices,-cluster-ids,-and-response-vector","page":"Example","title":"Extract model matrices, cluster ids, and response vector","text":"","category":"section"},{"location":"man/example/","page":"Example","title":"Example","text":"Next we form model matrices with the help of the StatsModels formula syntax:","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"using StatsModels\nf = @formula(ravens ~ 1 + year + treatment + sex + age_at_time0 +\n                      height + weight + head_circ + ses + mom_read + mom_write + mom_edu)\nmodel_frame = ModelFrame(f, cog_df)\nmodel_mat = ModelMatrix(model_frame).m\nnothing # hide","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"We form two model matrices. One is low dimensional and includes features we do not wish to penalize, and the other is higher dimensional and includes the many features whose effects will be regularized. ","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"X = model_mat[:, 1:2] # Non-penalized, random effect columns (one for intercept, and the other for year)\nG = model_mat[:, 3:end] # High dimensional set of covariates whose effects are regularized\nnothing # hide","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"Finally, we get the cluster (in this case, student) ids and the response, the students' Ravens test scores. ","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"student_id = cog_df.id\ny = cog_df.ravens\nnothing # hide","category":"page"},{"location":"man/example/#Fitting-model","page":"Example","title":"Fitting model","text":"","category":"section"},{"location":"man/example/","page":"Example","title":"Example","text":"The main function in the package is hdmm(), which accepts the two design matrices, the response, and the group id as required positional arguments, and returns the fitted model:","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"using HighDimMixedModels\nfit = hdmm(X, G, y, student_id)","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"The function has a number of keyword arguments that can be specified to modify the defaults–see the documentation. For example, by default, we fit a model with the SCAD penalty, which produces less bias. To apply the LASSO penalty, specify penalty = \"lasso\" in the call. Also note that the default value of lambda (the hyperparameter that controls the degree of penalization) is 10. Since the default (unless standardize = false) is to standardize the design matrices before running the algorithm, this is how much the coefficients of the standardized predictors are penalized. In practice, you can and should try fitting the model for several different choices of lambda and choose the fit that leads to the lowest fit.BIC.","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"By default, the features that are assigned random slopes are all those that appear as columns in the matrix X, i.e. those features whose coefficients are not penalized. If you wish to include a feature whose coefficient is not penalized, but do not wish to assign this feature a random slope, then you can specify the argument Z in the call to hdmm to be a matrix whose columns contain only the variables in X that you wish to assign random slopes.","category":"page"},{"location":"man/example/#Inspecting-model","page":"Example","title":"Inspecting model","text":"","category":"section"},{"location":"man/example/","page":"Example","title":"Example","text":"The object fit which is returned by hdmm() is a struct with fields providing all relevant information about the model fit. These can be accessed using the dot notation, e.g. fit.fixef to retrieve all the fixed effect estimates (including those set to 0) and fit.log_like to get the log likelihood at the estimates. To print all the fields stored in the object, you can type fit. followed by the tab key or check the documentation for the struct.","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"Several model inspection functions from StatsBase.jl are also available, such as residuals(fit) and fitted(fit). Note that these fitted values and residuals take into account the random effects by incorporating the best prediction of these random effects (BLUPs) for each student into the predictions. ","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"To print a table with only the selected coefficients (i.e. those that are not set to 0), use the function coeftable(). The names of these variables will appear alongside their estimates if you pass them as a second argument:","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"coeftable(fit, coefnames(model_frame))","category":"page"},{"location":"man/example/#Plotting-model","page":"Example","title":"Plotting model","text":"","category":"section"},{"location":"man/example/","page":"Example","title":"Example","text":"Here, we show how to plot the observed scores and our model's predictions for five different students over time:","category":"page"},{"location":"man/example/","page":"Example","title":"Example","text":"using Plots\nmask = student_id .== 1\nplot(cog_df.year[mask], cog_df.ravens[mask], seriestype = :scatter, label = \"student 1\", color = 1 )\nplot!(cog_df.year[mask], fitted(fit)[mask], seriestype = :line, color = 1, linestyle = :dash, linewidth = 3, label = \"\")\nfor i in [2,4,5,6]\n    mask = student_id .== i\n    # add student to plot\n    plot!(cog_df.year[mask], cog_df.ravens[mask], seriestype = :scatter, label = \"student $i\", color = i)\n    plot!(cog_df.year[mask], fitted(fit)[mask], seriestype = :line, color = i, linestyle = :dash, linewidth = 3, label = \"\")\nend\nplot!(legend=:outerbottom, legendcolumns=3, xlabel = \"Year\", ylabel = \"Ravens Score\")","category":"page"},{"location":"#HighDimMixedModels.jl","page":"Home","title":"HighDimMixedModels.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"HighDimMixedModels.jl is a package for fitting regularized linear mixed-effect models to high dimensional, clustered data. It is a Julia implementation of the estimation approach in","category":"page"},{"location":"","page":"Home","title":"Home","text":"Schelldorfer, J., Bühlmann, P., & DE GEER, S. V. (2011). Estimation for high‐dimensional linear mixed‐effects models using ℓ1‐penalization. Scandinavian Journal of Statistics, 38(2), 197-214.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Two options for penalties are provided, the original LASSO and the smoothly clipped absolute deviation (SCAD) penalty described in","category":"page"},{"location":"","page":"Home","title":"Home","text":"Ghosh, A., & Thoresen, M. (2018). Non-concave penalization in linear mixed-effect models and regularized selection of fixed effects. AStA Advances in Statistical Analysis, 102, 179-210.","category":"page"},{"location":"man/installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"man/installation/#Installation-of-Julia","page":"Installation","title":"Installation of Julia","text":"","category":"section"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"Julia is a high-level and interactive programming language (like R or Matlab), but it is also high-performance (like C). To install Julia, follow instructions here. For a quick & basic tutorial on Julia, see learn x in y minutes.","category":"page"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"Editors:","category":"page"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"Visual Studio Code provides an editor and an integrated development environment (IDE) for Julia: highly recommended!\nYou can also run Julia within a Jupyter notebook (formerly IPython notebook).","category":"page"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"IMPORTANT: Julia code is just-in-time compiled. This means that the first time you run a function, it will be compiled at that moment. So, please be patient! Future calls to the function will be much much faster. Trying out toy examples for the first calls is a good idea.","category":"page"},{"location":"man/installation/#Installation-of-the-package","page":"Installation","title":"Installation of the package","text":"","category":"section"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"To install HighDimMixedModels, type in the Julia REPL","category":"page"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"]\nadd HighDimMixedModels","category":"page"},{"location":"man/installation/","page":"Installation","title":"Installation","text":"The installation can take a few minutes, be patient. The package has dependencies such as Optim.jl and Lasso.jl (see the Project.toml file for the full list), but everything is installed automatically. ","category":"page"}]
}
