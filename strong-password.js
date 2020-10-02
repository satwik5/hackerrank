function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    let security=0;
    if(password.length<1){return 6;}

    console.log(n,password)
    var special_characters = "!@#$%^&*()-+"
    var num=1, lower=1, upper=1, special=1;
    for(let i=0;i<password.length;i++){ console.log(password[i])
        if(password[i]>=0 && password[i]<=9){num=0;}
        else if(password[i]>='a' && password[i]<='z'){lower=0;}
        else if(password[i]>='A' && password[i]<='Z'){upper=0}
        else if(/!@#$%^&*()-+/.test(password[i]) != -1){special=0}
    }

    security=num + lower + upper + special;
    console.log('level',security,'-',num , lower , upper , special)
    return password.length> 6-security ? security: 6-password.length ;
}
