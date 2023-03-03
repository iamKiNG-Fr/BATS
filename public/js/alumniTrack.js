const tableHead = document.querySelector('.tableHead');   
const searchBtn = document.querySelector('.search-btn');   

searchBtn.addEventListener( 'click', () =>{
    console.log('You touched me');
    tableHead.style.display= "block";
})
// function showSearch(){
//     if(tableHead.style.display == "none"){
//         console.log('display: flex');
//         
//     }
// }