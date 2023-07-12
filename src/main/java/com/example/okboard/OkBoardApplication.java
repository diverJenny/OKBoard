package com.example.okboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Data Source 없이 실행 할때 : @SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
@SpringBootApplication
public class OkBoardApplication {

	public static void main(String[] args) {
		SpringApplication.run(OkBoardApplication.class, args);
	}

}
