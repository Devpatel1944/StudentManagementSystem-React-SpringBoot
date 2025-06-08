package com.StudentManagement.service;

import com.StudentManagement.exception.StudentAlreadyExistsException;
import com.StudentManagement.exception.StudentNotFoundException;
import com.StudentManagement.model.Student;
import com.StudentManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private  StudentRepository SR;

    @Override
    public Student addStudent(Student student) {
        if(studentAlreadyExists(student.getEmail())){
            throw  new StudentAlreadyExistsException(student.getEmail()+" is Exists");
        }
        return SR.save(student);
    }

    @Override
    public List<Student> getStudent() {
        return SR.findAll();
    }

    @Override
    public Student updateStudent(Student student, long id) {

        return SR.findById(id).map(st->{
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());
            return SR.save(st);
        }).orElseThrow(()-> new StudentNotFoundException("Student Not Found"));
    }

    @Override
    public Student getStudentById(long id) {
        return SR.findById(id).orElseThrow(()->new StudentNotFoundException("Id is Invalid"));
    }

    @Override
    public void deleteStudent(long id) {
       if(!SR.existsById(id)){
           throw new StudentNotFoundException("Sorry Student Is not found");
       }
       SR.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return SR.findByEmail(email).isPresent();
    }
}
