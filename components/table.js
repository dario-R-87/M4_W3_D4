export const getTableRows = (users) => {
    let htmlTableRows="";
    users.map((user)=>{
        htmlTableRows += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>
        `;
    });
    return htmlTableRows;   
};