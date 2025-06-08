package com.StudentManagement.service;

import com.StudentManagement.model.Student;

import java.util.List;

public interface StudentService {

    Student addStudent(Student student);

   List<Student> getStudent();

   Student updateStudent(Student student,long id);

   Student getStudentById(long id);

   void deleteStudent(long id);
}
