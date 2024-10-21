import"react/jsx-runtime";import"react";var t=function(t){return{validate:function(e){return!!e&&e.length>=t},errorMessage:"Password must be at least ".concat(t," characters long")}},e={validate:function(t){return/[A-Z]/.test(t)},errorMessage:"Password must contain at least one uppercase letter"},r={validate:function(t){return/[a-z]/.test(t)},errorMessage:"Password must contain at least one lowercase letter"},a={validate:function(t){return/\d/.test(t)},errorMessage:"Password must contain at least one number"},s={validate:function(t){return/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(t)},errorMessage:"Password must contain at least one special character"};export{t as LengthValidator,r as LowercaseValidator,a as NumberValidator,s as SpecialCharValidator,e as UppercaseValidator};
//# sourceMappingURL=index.js.map