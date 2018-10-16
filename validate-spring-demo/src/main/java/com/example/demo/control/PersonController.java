package com.example.demo.control;

import com.example.demo.dao.PersonRepository;
import com.example.demo.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonController {
    @Autowired
    PersonRepository personRepository;

    @GetMapping(value = "/person")
    public List<Person> personList() {
        return personRepository.findAll();
    }
    /**
     * 添加一个人员
     *
     * @param name
     * @param pass
     * @return
     */
    @PostMapping(value = "/person")
    public Person personAdd(@RequestParam("name") String name,
                            @RequestParam("pass") String pass) {
        Person person = new Person();
        person.setName(name);
        person.setPass(pass);
//        这个操作就保存了？不需要mysql语句了？
        return personRepository.save(person);
    }


}
