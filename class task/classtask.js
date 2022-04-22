const getcountries =()=>{
    const world= new XMLHttpRequest();
    world.open("GET", "https://restcountries.com/v3.1/all");
    world.send();
    world.responseType="json";
    world.onload=()=>{
        const countries= world.response;
        for (var i=0;i<countries.length;i++){
            console.log(`name:${countries[i].name.common} population:${countries[i].population} `);
        }
    };
};
getcountries();