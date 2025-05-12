const country_url="https://humble-space-memory-g46j9rxjv769hvpjj-6006.app.github.dev/country";
fetch(country_url).then(response=>{
    if(!response.ok)
        throw new Error("failed to fect country data");
    return response.json();
        
}).then(data=>{
    const tbody=document.querySelector("#countrytable");
    data.forEach(country=>{
        const row =document.createElement("tr");
        row.innerHTML=`
        <td>${country.country_id}</td>
        <td>${country.country_name}</td>
        <td>${country.region_id}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});