package com.klef.ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DockerBackendSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(DockerBackendSpringbootApplication.class, args);
		System.out.println("Spring Boot Docker Project is Running ... !!!!");
	}

}
