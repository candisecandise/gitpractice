package com.example.demo.control;

import com.alibaba.fastjson.JSON;
import com.example.demo.dao.PersonRepository;
import com.example.demo.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class HelloController {

    @Autowired
    PersonRepository personRepository;

    @RequestMapping("/hello")
    public String hello(HttpServletRequest request) {
        System.out.println("-----------------------首页");
//        List<Person> p =  personRepository.findAll();
//        long count = personRepository.count();
//        int count2 = Integer.parseInt((count-1)+"");
//        String username = p.get(count2).getName();
//        String password = p.get(count2).getPass();
//        System.out.println("************首页的count="+count);
//        System.out.println("************首页的username="+username);
//        System.out.println("************首页的password="+password);
//        request.setAttribute("count",count);
//        request.setAttribute("username",username);
//        request.setAttribute("password",password);
        return "index";
    }

    @RequestMapping("/startForm")
    public String startForm() {
        System.out.println("-----------------------打开表单");
        return "validate";
    }

//    responseBody 代表 ajax，所以返回的不是jsp页面了
    @ResponseBody
    @RequestMapping("/validateForm")
    public String validateForm(HttpServletRequest request) {

        System.out.println("-----------------------提交");
        String username = request.getParameter("username");
        String password =  request.getParameter("password");
        Person p = new Person();
        p.setName(username);
        p.setPass(password);
        personRepository.save(p);
        System.out.println("************username="+p.getName());
        System.out.println("************password="+p.getPass());
//        从数据库读取数据判断
        return "success";
    }

    @ResponseBody
    @RequestMapping("/refreshForm")
    public String refreshForm(HttpServletRequest request) {
        List<Person> p =  personRepository.findAll();
        long count = personRepository.count();
        int count2 = Integer.parseInt((count-1)+"");
        String username = p.get(count2).getName();
        String password = p.get(count2).getPass();
        System.out.println("************首页的count="+count);
        System.out.println("************首页的username="+username);
        System.out.println("************首页的password="+password);

        List<Object> list = new ArrayList<>();
        list.add(count);
        list.add(username);
        list.add(password);
        String str = JSON.toJSONString(list);
        System.out.println("************首页的json="+str);
        return str;
    }

}