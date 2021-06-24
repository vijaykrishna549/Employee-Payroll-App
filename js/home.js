// window.addEventListener('DOMContentLoaded', (event) => {
//     createInnerHtml();
// });

// //Template Literal ES6 Feature

// const createInnerHtml = () => {
//     const innerHtml = `
//     <tr>
//     <th></th>
//     <th>Name</th>
//     <th>Gender</th>
//     <th>Department</th>
//     <th>Salary</th>
//     <th>Start Date</th>
//     <th>Actions</th>
// </tr>
// <tr>
//     <td><img class="profile" alt="" src="../assets/Profile-Images/Ellipse -3.png" </td>
//     <td>Vijay Krishna</td>
//     <td>Male</td>
//     <td><div class="dept-label">HR</div>
//     <div class="dept-label">Engineer</div></td>
//     <td>300000</td>
//     <td>31 Oct 2018</td>
//     <td>
//         <img id="1" onclick="remove(this)" alt="delete"
//         src="../assets/Icons/delete-black-18dp.svg">
//         <img id="1" onclick="update(this)" alt="edit"
//         src="../assets/Icons/create-black-18dp.svg">
//     </td>
// </tr>
//                     `;
//  document.querySelector('#table-display').innerHtml = innerHtml;
// }


window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
    <td><img class="profile" alt="" src="../assets/Profile-Images/Ellipse -3.png" </td>
     <td>Vijay Krishna</td>
     <td>Male</td>
    <td><div class="dept-label">HR</div>
     <div class="dept-label">Engineer</div></td>
     <td>300000</td>
     <td>31 Oct 2018</td>
     <td>
         <img id="1" onclick="remove(this)" alt="delete"
         src="../assets/Icons/delete-black-18dp.svg">
         <img id="1" onclick="update(this)" alt="edit"
         src="../assets/Icons/create-black-18dp.svg">
     </td>
 </tr>
 `;
 document.querySelector('#table-display').innerHTML = innerHtml;

}
