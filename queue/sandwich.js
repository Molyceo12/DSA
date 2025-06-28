function countStudents(students, sandwiches) {
    let queue = students
    let stack = sandwiches.reverse(); 
    let failedAttempts = 0;

    while (queue.length > 0 && failedAttempts < queue.length) {
        if (queue[0] === stack[stack.length - 1]) {
            queue.shift();        
            stack.pop();          
            failedAttempts = 0;   
        } else {
            queue.push(queue.shift()); 
            failedAttempts++;
        }
    }

    return queue.length;
}

 students = [1,1,0,0], sandwiches = [0,1,0,1]

 console.log("answer",countStudents(students,sandwiches));