//Last Updated : 26-DEC-2024 
import {ExecuteQuery}  from "../db/dbService.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


let mSP = "SEC_UsersSP";

class  User{
    constructor(UserID, UserName, Password, IsActive ){
      this.UserID = UserID;
      this.UserName = UserName;
      this.Password = Password;
      this.IsActive = IsActive;

/*
	@RecordNo		bigint= NULL,
	@Id				bigint= NULL,
	@UserID			varchar(100)= '',
	@UserName		varchar(200)= '',
	@Password		varchar(100)= '',
	@EmailID		varchar(100)= '',
	@isActive		bit= 1,
	@isLoggedIn		bit= 0,
	@LastLoginDateTime datetime= NULL,
	@isSystemDefined bit= 0,
	@ImageURL		varchar(200)= '',
	@ManagerID		varchar(100)= '',
	@EmpID			varchar(100)= '',
	@CustomQuestion varchar(200)= '',
	@CustomAnswer	varchar(200)= '',
	@PastDaysLimit	int= 0,
	@FutureDaysLimit int= 0,
	@refreshToken	varchar(500)= '',
	@Remarks		varchar(100)= '',
	@createdAt		datetime= NULL,
	@createdBy		varchar(100)= '',
	@updatedAt		datetime= NULL,
	@updatedBy		varchar(100)= '',
*/

    };


    static async fetchAll() {
      try {
            let mQuery= mSP;//"SEC_UserSecuritySP";
            let mParams = "@nType = 1" ; 
            
            //return await ExecuteQuery(mQuery,mParams);

            return await ExecuteQuery(mQuery,mParams);
            //return Promise.resolve("Hello");
      } catch (err) {
          return err
      }
    };

    static async findById(Id) {
      try {
            //let mQuery = "GEN_CitySP";
            //let mParams =  "@nsType = 2, @CityCode = '" + Id + "'" ; 
            let mQuery = mSP;
            let mParams =  "@nType = 2, @UserID = '" + Id + "'" ; 
            
            return await ExecuteQuery(mQuery,mParams);
            
      } catch (err) {
          return err
      }
    };

    static async findOne(record,obj) {
      try {
            
            let mQuery = mSP;
            let mParams =  "@nType = 2, @UserID = '" + record.UserID + "'" ; 
      
            return await ExecuteQuery(mQuery,mParams);
            
      } catch (err) {
          return err
      }
    };

    static async save(record) {
      try {
          
            console.log(record);

            let mQuery = mSP;
            let mParams = " @nType = 100"; 
            mParams += ", @UserID = '" + record.UserID + "'" ; 
            mParams += ", @UserName = '" + record.UserName + "'" ; 
            mParams += ", @Password = '" + record.Password + "'" ; 
            mParams += ", @IsActive = '" + record.IsActive + "'" ; 
            //mParams += ", @BranchCode = '" + record.BranchCode + "'" ;
            mParams += ", @DefinitionDate = '" + record.DefinitionDate + "'" ;  
            

            console.log( mQuery + " " + mParams );

            // let mReturnVal = mSQL + " @nType=1, @nsType=" + nsType
            // + ", @BranchCode=" + "'001'"
            // + ", @UserID=" + txtRoleID.Text.Trim()
            // + ", @UserName='" + txtRole.Text.Trim().Replace("'", "") 
            // + "', @DefinitionDate='" + DateTime.Parse(DateTime.Now.ToString()).ToString(clsGeneralSetting.mDateFormatMMDD)
            // + "', @Remarks='" + txtRemarks.Text.Trim()
            // + "', @Password='" + txtPassword.Text.Trim()
            // + "', @ManagerID='" + Interaction.IIf(txtManagerID.Text.Trim() == "", txtRoleID.Text.Trim(), txtManagerID.Text.Trim())
            // + "', @IsActive=" + chkIsActive.Checked
            // + "";
            
            return await ExecuteQuery(mQuery,mParams);
            

      } catch (err) {
          return err
      }
    };

    static async delete(record) {
      try {
          
            console.log(record);

            let mQuery = mSP;
            let mParams = " @nType = 300"; 
            mParams += ", @UserID = '" + record.UserID + "'" ; 

            console.log( mQuery + " " + mParams );
            
            return await ExecuteQuery(mQuery,mParams);

      } catch (err) {
          return err
      }
    };

    static async isPasswordCorrect(password, DBpassword) {
      try {
        
            return await bcrypt.compare(password, DBpassword)

      } catch (err) {
          return err
      }
    };

    static async generateAccessToken() {
      try {
        
            return await jwt.sign(
              {
                  _id: this._id,
                  email: this.email,
                  username: this.username,
                  fullName: this.fullName
              },
              process.env.ACCESS_TOKEN_SECRET,
              {
                  expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
              }
          );

      } catch (err) {
          return err
      }
    };    

    static async generateRefreshToken() {
      try {
        
            return await jwt.sign(
              {
                  _id: this._id,
                  email: this.email,
                  username: this.username,
                  fullName: this.fullName
              },
              process.env.REFRESH_TOKEN_SECRET,
              {
                  expiresIn: process.env.REFRESH_TOKEN_EXPIRY 
              }
          );

      } catch (err) {
          return err
      }
    };    


  };
  
  export  { User };