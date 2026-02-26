// В Node.js аргументи зберігаються в масиві process.argv
const arguments = process.argv;

// Перші два елементи завжди фіксовані:
// arguments[0] - шлях до самого Node.exe
// arguments[1] - шлях до вашого файлу скрипта

console.log("--- Аналіз аргументів ---");

if (arguments.length <= 2) {
    console.log("Ви не передали жодних додаткових параметрів.");
} else {
    // Користувацькі аргументи починаються з індексу 2
    const userFiles = arguments.slice(2); 
    
    console.log(`Ви передали ${userFiles.length} файл(ів):`);
    
    userFiles.forEach((file, index) => {
        console.log(`Файл №${index + 1} під назвою "${file}" готовий до завантаження в презентацію!`);
    });
}