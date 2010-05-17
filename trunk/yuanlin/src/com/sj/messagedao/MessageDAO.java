package com.sj.messagedao;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.dom4j.DocumentException;

import com.sj.dom4j.XmlDB;
import com.sj.model.Message;

public class MessageDAO {
	
	public File file;
	public String fileDirectory;
	public String fileName;
	public SimpleDateFormat sdf;
	public XmlDB xmldb;
	private static int totalPages = 1;
		

	public int getTotalPages() {
		totalPages = (xmldb.getElementSize()-1)/8+1;
		return totalPages;
	}

	public MessageDAO(String fileDirectory) throws IOException {
		sdf = new SimpleDateFormat("yyyy");
		
		this.fileDirectory = fileDirectory;
		fileName = fileDirectory+sdf.format(new Date())+".xml";
		file = new File(fileName);
		try {
			if(!file.exists()){
				file.createNewFile();
				xmldb = new XmlDB(file,true);
			}
			else{
				xmldb = new XmlDB(file,false);
			}
		} catch (DocumentException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	public void saveMessage(Message message){
			try {
				xmldb.addElement(message);
			} catch (IOException e) {
				e.printStackTrace();
			}

	}
	
	public List<Message> getMessages(int currentPage){
				return xmldb.getElements(currentPage,this.getTotalPages());
	}
	

	
	

}
