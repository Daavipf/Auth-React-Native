import { Types } from "mongoose";
import "react-native-get-random-values";

export interface User {
  _id: Types.ObjectId;
  realName: string;
  userName: string;
  aboutMe?: string;
  email: string;
  password: string;
  phone: string;
  zipCode: string;
  city: string;
  state: string;
  country?: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
  badge?: Types.ObjectId;
  isVerified?: boolean;
  bands: Types.ObjectId[];
  shows: Types.ObjectId[];
  resetPasswordToken?: string;
  resetPasswordTokenExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export function isUser(obj: any): obj is User {
  return (
    obj &&
    obj._id instanceof Types.ObjectId &&
    typeof obj.realName === "string" &&
    typeof obj.userName === "string" &&
    typeof obj.email === "string" &&
    typeof obj.password === "string" &&
    typeof obj.phone === "string" &&
    typeof obj.zipCode === "string" &&
    typeof obj.city === "string" &&
    typeof obj.state === "string" &&
    (typeof obj.country === "string" || obj.country === undefined) &&
    Array.isArray(obj.followers) &&
    obj.followers.every(
      (follower: any) => follower instanceof Types.ObjectId
    ) &&
    Array.isArray(obj.following) &&
    obj.following.every((follow: any) => follow instanceof Types.ObjectId) &&
    (obj.badge instanceof Types.ObjectId || obj.badge === undefined) &&
    (typeof obj.isVerified === "boolean" || obj.isVerified === undefined) &&
    Array.isArray(obj.bands) &&
    obj.bands.every((band: any) => band instanceof Types.ObjectId) &&
    Array.isArray(obj.shows) &&
    obj.shows.every((show: any) => show instanceof Types.ObjectId) &&
    (typeof obj.resetPasswordToken === "string" ||
      obj.resetPasswordToken === undefined) &&
    (obj.resetPasswordTokenExpires instanceof Date ||
      obj.resetPasswordTokenExpires === undefined) &&
    obj.createdAt instanceof Date &&
    obj.updatedAt instanceof Date
  );
}
