package com.jamesleeson.onlineStatistics;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

/** 
 * 这种方法使用HttpSessionBindingListener接口，让User类实现这个接口,当User对象放到Session里时，就会触发该接口里的 
 * void valueBound(HttpSessionBindingEvent event) 
 * 这个方法。当User对象从Session里移除时,就会触发该接口里的 void valueUnbound(HttpSessionBindingEvent 
 * event) 这个方法 
 * 
 * @author ThrFou 
 * 
 */ 
public class User implements HttpSessionBindingListener {

	private static int onLineNum = 0;

	public void valueBound(HttpSessionBindingEvent arg0) {
		System.out.println(++onLineNum);
	}

	public void valueUnbound(HttpSessionBindingEvent arg0) {
		System.out.println(--onLineNum);
	}

}
