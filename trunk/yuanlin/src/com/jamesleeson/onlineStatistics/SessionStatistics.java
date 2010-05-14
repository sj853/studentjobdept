package com.jamesleeson.onlineStatistics;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * 这种方法是通过HttpSessionListener来做的 这个不方便统计在线的到底是普通用户还是登陆用户！！！
 * 
 * @author ThrFou
 * 
 */
public class SessionStatistics implements HttpSessionListener {

	static long onLineNum = 0;

	public void sessionCreated(HttpSessionEvent arg0) {
		onLineNum++;
		ContextStatistics.allViewNum++;
		
	}

	public void sessionDestroyed(HttpSessionEvent arg0) {
		onLineNum--;
	System.out.println(onLineNum);
	}

	public static long getOnLineNum() {
		return onLineNum;
	}

	public static void setOnLineNum(long onLineNum) {
		SessionStatistics.onLineNum = onLineNum;
	}

}
