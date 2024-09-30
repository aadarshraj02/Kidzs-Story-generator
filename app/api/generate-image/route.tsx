import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req: NextRequest) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output: any = await replicate.run(
    "bingbangboom-lab/flux-new-whimscape:2e8de10f217bc56da163a0204cf09f89995eaf643459014803fae79753183682",
    {
      input: {
        model: "dev",
        width: 856,
        height: 1156,
        prompt: "",
        lora_scale: 1,
        num_outputs: 1,
        aspect_ratio: "1:1",
        output_format: "png",
        guidance_scale: 3.5,
        output_quality: 100,
        prompt_strength: 0.8,
        extra_lora_scale: 1,
        num_inference_steps: 25,
      },
    }
  );
  console.log(output);
  return NextResponse.json({ imageUrl: output[0] });
}
