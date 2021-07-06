let names = ['Taylor', 'Jeffrey', 'Mohasin', 'Samia'];

names.forEach(function(name) {
    console.log(name)
});

names.forEach(name => {
    console.log(name)
});

names.forEach(() => {
    console.log('name')
});

names.forEach((name, index) => console.log(name, index));

names.forEach(name => console.log(name));

names = names.map(name => `${name} is cool`)
console.log(names);