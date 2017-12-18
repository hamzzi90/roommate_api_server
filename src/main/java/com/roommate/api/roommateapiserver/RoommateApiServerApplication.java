package com.roommate.api.roommateapiserver;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

@ComponentScan("com.roommate")
@SpringBootApplication
public class RoommateApiServerApplication{

	public static final String CONFIG_LOCATION_PATH = "classpath:mybatis-config.xml";
	public static final String MAPPER_LOCATIONS_PATH = "classpath:mapper/*/*Mapper.xml";

	public static void main(String[] args) {
		SpringApplication.run(RoommateApiServerApplication.class, args);
	}

	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);

		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		sqlSessionFactoryBean.setConfigLocation(resolver.getResource(CONFIG_LOCATION_PATH));
		sqlSessionFactoryBean.setMapperLocations(resolver.getResources(MAPPER_LOCATIONS_PATH));


		return sqlSessionFactoryBean.getObject();
	}

}
