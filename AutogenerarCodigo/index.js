



const generateFunction = (input, output) => {
    let response =  output;
    response.marcas = input.map(e => {
       return  e.marca
    });
    response.total = cards.length;

    return response;
}





let cards = [
    {
        marca: 'toyota',
        matricula: '1234'
    },
    {
        marca: 'toyota',
        matricula: '3131'
    },
    {
        marca: 'honda',
        matricula: '1423'
    },
    {
        marca: 'ferrari',
        matricula: '8723'
    }
];

let output = {
    marcas: [],
    total: 'output.length'
};




console.log(generateFunction(cards, output));


const CODE = document.getElementById('code');
CODE.innerHTML = `
<pre>
<code>



</code>
</pre>`;