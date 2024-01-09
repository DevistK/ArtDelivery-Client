import axios from "axios";
import { ArtInterface } from "@/interface/post.interface";
import { ResponseInterface } from "@/interface/response.interface";

export async function generateArtwork(
  data: ArtInterface,
): Promise<ResponseInterface> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/art`,
      {
        size: data.size,
        quality: data.quality,
        style: data.style,
        prompt: data.prompt,
      },
    );

    return response.data;
  } catch (e: any) {
    throw e;
  }
}
