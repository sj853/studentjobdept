package com.jamesleeson.onlineStatistics;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.jamesleeson.onlineStatistics.persistence.PersistenceStatistics;

/**
 * @author ThrFou
 */
public class ContextStatistics implements ServletContextListener {

	static long allViewNum = 0;

	public void contextDestroyed(ServletContextEvent arg0) {
		// 结束的时候就将访问量写入文件
		// recordDataToIO(allViewNum);
		PersistenceStatistics.persistentData("allViewNum",allViewNum);
	}

	public void contextInitialized(ServletContextEvent arg0) {
		// 启动时就从文件中读取访问量
		allViewNum = PersistenceStatistics.readData("allViewNum");
	}

	public static long getAllViewNum() {
		return allViewNum;
	}

	public static void setAllViewNum(long allViewNum) {
		ContextStatistics.allViewNum = allViewNum;
	}

}
