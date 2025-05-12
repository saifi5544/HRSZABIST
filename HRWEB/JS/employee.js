const employee_url="https://humble-space-memory-g46j9rxjv769hvpjj-6006.app.github.dev/totallemployee";
fetch(employee_url).then(response=>{
    if(!response.ok)
        throw new Error("failed to fect country data");
    return response.json();
        
}).then(data=>{
    const tbody=document.querySelector("#employeetable tbody");
    data.forEach(employee=>{
        const row =document.createElement("tr");
        row.innerHTML=`
        <td>${employee.employee_id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.phone_number}</td>
        <td>${employee.hire_date}</td>
        <td>${employee.job_id}</td>
        <td>${employee.salary}</td>
        <td>${employee.commission_pct}</td>
        <td>${employee.manager_id}</td>
        <td>${employee.department_id}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});