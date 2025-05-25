import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiResponse} from '../utils/ApiResponse.js'

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required ");
  }

  const ExistedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (ExistedUser) {
    throw new ApiError(409, "User Already Exist");
  }

  const avaterLocalPath = req.files?.avater[0]?.path;

  if (!avaterLocalPath) {
    throw new ApiError(400, "avater file is required");
  }
  const coverLocalPath = req.files?.coverImage[0]?.path;

  const avater = await uploadCloudinary(avaterLocalPath);
  if (!avater) {
    throw new ApiError(400, "avater file is required");
  }

  const coverImage = await uploadCloudinary(coverLocalPath);

  //Entery in DataBase
  const user = await User.create({
    fullName,
    avater: avater.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  //fields that are remove
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering  the user");
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser ,"User registered Successfuly")
  )

});

export { registerUser };
