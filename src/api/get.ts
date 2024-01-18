import axios from "axios";
import { ArtInterface } from "@/interface/post.interface";
import { ResponseInterface } from "@/interface/response.interface";

export async function getUserInfo(
  token: string | null,
): Promise<ResponseInterface> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/user/info`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (e: any) {
    throw e;
  }
}
