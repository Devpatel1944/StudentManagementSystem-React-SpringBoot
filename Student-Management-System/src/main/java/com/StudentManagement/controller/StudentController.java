package com.StudentManagement.controller;

import com.StudentManagement.model.Student;
import com.StudentManagement.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentServiceImpl SRI;


    @GetMapping
    public ResponseEntity<List<Student>> getAllStudent(){
        return new ResponseEntity<>(SRI.getStudent(), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return new ResponseEntity<>(SRI.addStudent(student),HttpStatus.OK) ;
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student , @PathVariable long id){
        return new ResponseEntity<>(SRI.updateStudent(student,id),HttpStatus.OK) ;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable long id){
        SRI.deleteStudent(id);
        return  new ResponseEntity<>("Deleted Student Successfully", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable long id){
        return new ResponseEntity<>(SRI.getStudentById(id),HttpStatus.FOUND);
    }
}
