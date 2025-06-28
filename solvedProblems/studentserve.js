const studentsServe=(students,breads)=>{

    breads.reverse();
    Failedattempts=0;

    while(breads.length>0 && Failedattempts!==students.length)
    {
        var topstudent=students.shift();
        var topbread=breads.pop();

        if(topstudent===topbread)
        {
             Failedattempts=0;
        }
        else
        {
            students.push(topstudent);
            breads.push(topbread);
            Failedattempts++
        }
    }

    if(breads.length===0)
    {
        return true
    }
    return false

}
const students=[1,0,0,1,1,0]
const breads=[0,1,1,0,0,0]

console.log("lets verify",studentsServe(students,breads));