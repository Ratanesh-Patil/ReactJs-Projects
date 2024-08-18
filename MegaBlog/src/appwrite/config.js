import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost(slug) {
    try {
       await this.database.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true
    } catch (error) {
      throw error;
      return false
    }
  }

  async getPost(slug){
    try {
        return this.database.getDocument( conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug)
        
    } catch (error) {
       throw error 
       return false
    }
}

async getPosts(queries = [Query.equal("status" , "active" )]){
    try {
        return this.database.listDocuments( conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            queries)
        
    } catch (error) {
       throw error 
       return false
    }
  }


//   flie upload service

async uploadFile(file){
    try {
        return await this.bucket.createFile(conf.appWriteBucketId,ID.unique(),file);
    } catch (error) {
        throw error
        return false
    }
}

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(conf.appWriteBucketId,fileId);
    } catch (error) {
        throw error
        return false
    }
}

 getFilePreview(fileId){
   
        return  this.bucket.getFilePreview(conf.appWriteBucketId,fileId);
   
}

}
const service = new Service();

export default service;
