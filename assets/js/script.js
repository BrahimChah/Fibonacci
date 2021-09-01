let sequence = Number(prompt("Saisir le nombre de séquence de Fibonacci souhaitée"));
document.body.innerHTML = ""

let i;
let f = [];
f[0] = 0;
f[1] = 1;
for (i=2; i<=sequence; i++) {
    if (i == 2) {
        f[i] = 0;
        document.body.innerHTML += f[i]+" ";
        document.body.innerHTML += f[i]+1+" ";
    }
    f[i] = f[i-2] + f[i-1];
    document.body.innerHTML += f[i]+" ";
}