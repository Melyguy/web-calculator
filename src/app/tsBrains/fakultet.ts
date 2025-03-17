export default function fakultet(tall: number) {
    if(tall <= 0) //throw new Error("Negative tall er ikke tillatt"
    {
        tall = 1
        return tall;
    }
    let resultat = 1;
    for (let i = 2; i <= tall; i++) {
        resultat *= i;
    }
    return resultat //Not-Yet-Implemented
}