import React from "react";
import Image from "next/image";
import Overlay from "@/components/common/overlay";

interface ImageViewerProps {
    selectedImage: string;
    unselectImage: () => void;
}

export default function ImageViewer(props: ImageViewerProps) {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <Overlay/>
            <div className="relative z-50 lg:w-[800px] w-[400px]">
                <Image src={props.selectedImage} alt={props.selectedImage} layout="responsive" width={500} height={300} />
            </div>
        </div>
    );
};

