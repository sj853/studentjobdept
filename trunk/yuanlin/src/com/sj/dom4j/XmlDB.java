package com.sj.dom4j;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.dom.DOMElement;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.sj.model.Message;

public class XmlDB {
	
	public Document document;
	private int ElementSize;
	public File file;
	public  final OutputFormat format = OutputFormat.createPrettyPrint();
	public final String initStr = "<?xml version='1.0' encoding='UTF-8'?><Messages/>";
	public SAXReader reader;
	public Element rootElem;

	public XMLWriter writer; 
	public XmlDB(File file,boolean isNew) throws DocumentException, IOException {
		this.file = file;
		reader = new SAXReader();
		reader.setEncoding("UTF-8");
		if(isNew){
			initXml(file);
		}
		document = reader.read(file.getPath());
		rootElem = document.getRootElement();
	}
	


	public void addElement(Message m) throws IOException{
		if(!rootElem.hasContent()){
			Element newElem = rootElem.addElement("Message");
			newElem.addElement("content").setText(m.getContent());
			newElem.addElement("time").setText(m.getTime());
			newElem.addElement("name").setText(m.getName());
		}
		else{
			Element firstElem = (Element)rootElem.selectNodes("//Message").get(0);
			Element newElem = (Element)firstElem.clone();
			newElem.element("content").setText(m.getContent());
			newElem.element("time").setText(m.getTime());
			newElem.element("name").setText(m.getName());
			rootElem.elements().add(0,newElem);
		}
		try {
			writer = new XMLWriter(new FileOutputStream(file),format); 
			writer.write(document);  
			writer.flush();
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			setNull();
		}
	}
	
	
	

	
	
	public List<Message> getElements(){
		ArrayList<Message> messages = new ArrayList<Message>();
		List t = rootElem.elements();
		for(Iterator<Message> iterator= t.iterator();iterator.hasNext();){
			Message message = new Message();
			Element messageElem = (Element)iterator.next();
			message.setContent(messageElem.elementText("content"));
			message.setTime(messageElem.elementText("time"));
			message.setName(messageElem.elementText("name"));
			messages.add(message);
			setNull();
		}
		return messages;
	}
	
	
	
	public List<Message> getElements(int currentPage,int totalPages){
		int num = 8;
		ArrayList<Message> messages = new ArrayList<Message>();
		List t = rootElem.elements();
		if(currentPage == totalPages){
			num = this.getElementSize()-(currentPage-1)*8;
		}
		
		int index = (currentPage-1)*8;
		for(int i=0;i<num;i++){
			Message message = new Message();
			Element messageElem = (Element)t.get(index);
			message.setContent(messageElem.elementText("content"));
			message.setTime(messageElem.elementText("time"));
			message.setName(messageElem.elementText("name"));
			messages.add(message);
			index++;
		}
		
		return messages;
	}
	
	public int getElementSize() {
		this.ElementSize = getElements().size();
		return ElementSize;
	}
	
	public void initXml(File file){
		try {
			FileWriter fileWriter = new FileWriter(file);
			BufferedWriter buffer = new BufferedWriter(fileWriter);
			buffer.write(initStr,0,initStr.length());
			buffer.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void setNull(){
		  file = null;
		  reader = null;
		  writer = null;
		  
	}

	
}	
