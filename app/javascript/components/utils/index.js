import { getJson, postJson, putJson, deleteJson } from "./FetchJson";
import { CircularLoader } from "./LoadingState";
import { generateAvatarFromName } from "./AvatarGenerator";
import FlashMessage from "./FlashMessage";
import ErrorParser from "./ErrorParser";
import Toast from "./Toast";
import { pathName } from "./UrlHandler"

export {
  getJson, postJson, putJson, deleteJson,
  CircularLoader,
  generateAvatarFromName,
  FlashMessage,
  ErrorParser,
  Toast,
  pathName
};