
const myChart = document.querySelector('#myChart').getContext('2d')

const getCountries = async () => {
    try {
        const resp = await axios.get('/admin/regcountries')
        const countries = resp.data;

        const countryNames = []
        const numOfAlumni = []

        for (const countryName of countries) {
            const country = countryName.country
            countryNames.push(country)
        }

        for (const alumni of countries) {
            const alumnus = alumni.cnt
            numOfAlumni.push(alumnus)
        }

        // console.log(countryNames, numOfAlumni);

        return {country: countryNames, alumniNum: numOfAlumni}

    } catch (error) {
        console.log(error);
    }
}

async function dashchart(){

    const {country, alumniNum} = await getCountries()

    const alumnichart = new Chart(myChart, {
        type: 'bar',
        data:{
            labels: country,
            datasets: [{
                label: 'Population',
                data: alumniNum,
                backgroundColor: '#0060ba'
            }]
        },
        options:{}
    })
}

dashchart()


// const alumnichart = new Chart(myChart, {
//     type: 'bar',
//     data:{
//         labels: ['Boston', 'Worcester', 'Springfield', 'Cambridge', "Lowell"],
//         datasets: [{
//             label: 'Population',
//             data: [
//                 672814,
//                 203867,
//                 155770,
//                 116892,
//                 114804,
//                 104216
//             ],
//             backgroundColor: '#0060ba'
//         }]
//     },
//     options:{}
// })
// }
