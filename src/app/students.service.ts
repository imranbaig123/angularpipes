import { Student } from "./student";

export class StudentService{
    students: Student[]=[
        {name: 'John', course:'MBA', marks: 520, DOB:new Date('11-12-1998'), gender:'Male'},
        {name: 'Vic Star', course:'MBBS', marks: 450, DOB:new Date('01-02-1996'), gender:'Male'},
        {name: 'Monika', course:'BTech', marks: 480, DOB:new Date('21-12-1997'), gender:'Female'},
        {name: 'Jonas', course:'M.sc', marks: 505, DOB:new Date('11-12-1997'), gender:'Male'},
        {name: 'Mehana', course:'BE', marks: 495, DOB:new Date('11-02-1998'), gender:'Female'},
    ];

    totalMarks: number = 600;
}