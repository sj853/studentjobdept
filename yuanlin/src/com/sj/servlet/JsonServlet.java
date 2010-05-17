package com.sj.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JSONString;

import com.sj.messagedao.MessageDAO;
import com.sj.model.Message;

public class JsonServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6100330473877658980L;
	List<Message> messages;
	String content;
	PrintWriter out;
	String dataPath;
	Message m;
	MessageDAO md;
	String page;
	String name;
	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doPost(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		  
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		out = response.getWriter();
		dataPath = this.getServletContext().getRealPath("/WEB-INF/data/")+"\\";
		m = new Message();
		md = new MessageDAO(dataPath);
		content = request.getParameter("content");
		name = request.getParameter("name");
		if(!content.equals("null")){
			m.setContent(content);
			m.setTime(new Date().toLocaleString());
			m.setName(name);
			md.saveMessage(m);
			messages = md.getMessages(1);
		}
		else{
			page = request.getParameter("page");
			messages = md.getMessages(Integer.parseInt(page));
		}

		JSONArray jarray = new JSONArray();
		for (Message message : messages) {
			JSONObject jobject = new JSONObject()
			.element("content", message.getContent())
			.element("time", message.getTime())
			.element("name", message.getName());
			jarray.add(jobject);
		}
		JSONObject resObject = new JSONObject();
		resObject
		.element("pages", md.getTotalPages())
		.element("jarray", jarray);
		out.print(resObject);
	}

}
