function happyLadybugs(b) {  //RBY_YBR
    
if (b.length < 2) { if (b == '_') { return 'YES' } else { return 'NO' } }
    var u_count = b.split('').reduce(function (count, x) { return x == '_' ? count + 1 : count }, 0)
    console.log('u_count: ', u_count)
    if (u_count > 0) {
        if (b.length < 3) {
            if (b.charAt(0) != b.charAt(1)) { return 'NO'; }
        }
        var ab = b.split('').sort();
        console.log(ab)
        if (ab[0] != ab[1]) { return 'NO' }
        for (let i = 1; i < ab.length - u_count; i++) {
            console.log(ab[i - 1], ab[i], ab[i + 1])
            if (ab[i] != ab[i - 1] && ab[i] != ab[i + 1]) {
                return 'NO'
            }
        }
    }
    else {
        var ab = b.split('');
        console.log(ab)

        if (b.charAt(0) != b.charAt(1)) { return 'NO'; }
        if (b.charAt(ab.length - 1) != b.charAt(ab.length - 2)) { return 'NO' }

        for (let i = 1; i < ab.length - 1; i++) {
            console.log(ab[i - 1], ab[i], ab[i + 1])
            if (ab[i] != ab[i - 1] && ab[i] != ab[i + 1]) {
                return 'NO'
            }
        }

    }
    return 'YES'
}
