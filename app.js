const arr = [
    {
        name: 'Oleh',
        age: 18,
        street: 'Street One',
        car: 'BMW',
        haveBusiness: false
    },
    {
        name: 'Dima',
        age: 20,
        street: 'Street Three',
        car: 'Mercedes',
        haveBusiness: true
    },
    {
        name: 'Maksim',
        age: 15,
        street: 'Street Four',
        car: 'BMW',
        haveBusiness: true
    },
    {
        name: 'Vasyl',
        age: 25,
        street: 'Street Ten',
        car: 'Audi',
        haveBusiness: false
    },
    {
        name: 'Misha',
        age: 18,
        street: 'Street Two',
        car: 'Mercedes',
        haveBusiness: false
    },
    {
        name: 'Sasha',
        age: 21,
        street: 'Street Two',
        car: 'BMW',
        haveBusiness: false
    },
];

console.log(arr);

// task 1

document.querySelector('#task1').onclick = function(){
    const filterAge = arr.filter(object => object.age >= 20);
    console.log(filterAge)
} 

// task 2

document.querySelector('#task2').onclick = function(){
    const AllNameAndStreet = arr.map(object =>({
            name: object.name,
            street: object.street
        }))
    console.log(AllNameAndStreet)
}

//task 3

document.querySelector('#task3').onclick = function (){
    const usersHaveCar = arr.filter(el => el.car ==='BMW' && el.haveBusiness === false)
    console.log(usersHaveCar);
}

//task 4

document.querySelector('#task4').onclick = function(){
    const sortForAge = arr.sort((a, b) => {
        return a.age-b.age;
    })
    console.log(sortForAge);
}

//task 5

document.querySelector('#task5').onclick = function(){
    const summaAge = arr.reduce((acc, user) => acc + user.age,0)
    console.log(summaAge)
}

//task 6

document.querySelector('#task6').onclick = function(){
    let num = 1;
    const users = arr.forEach(user =>  console.log(num++ +' User is name '+ user.name))
    console.log(users)
}

//task 7

document.querySelector('#task7').onclick = function(){
    const sortForAge = arr.reduce((acm, el) => acm += el, '');
    console.log(sortForAge)
}

//task 8 

document.querySelector('#task8').onclick = function(){
    const countCar = arr.reduce((acm, user) => acm += user.car === 'BMW', 0)
    console.log('Users have BMW '+ countCar)
}

//task 9

document.querySelector('#task9').onclick = function(){
    const countCar = arr.reduce((acm, user) =>acm += user.car === 'BMW', 0)
    console.log({BMW: countCar})
}

//task 10 

document.querySelector('#task10').onclick = function(){
    const arrOfNumbers = [4, 2, 4, 7, 8, 4, 6, 2, 1, 3, 4, 7, 4, 5, 9, 3, 5, 1];
    const array =[];
    for(let i=1;i<10;i++){
        const resultFilter = arrOfNumbers.filter(num => num===i);
        array.push({i: resultFilter.length})
    }
    console.log(array);
}

//task 11

document.querySelector('#task11').onclick = function(){
    const arrOfImages = ['Mercedes_Photo', 'Audi_Photo', 'BMW_Photo', 'Ferrari_Photo', 'Porche_Photo'];
    console.log(arrOfImages);
    setInterval(() => {
        let firstEl = arrOfImages.shift();
        arrOfImages.push(firstEl);
        console.log(arrOfImages);  
    }, 5000);
}

//task 12

document.querySelector('#task12').onclick = function(){
    console.log('Не дуже зрозумів завдання')
    const date = new Date
    let time = date.toJSON().split('T')[1].split('.')[0];
    console.log('Time now is '+ time)
}