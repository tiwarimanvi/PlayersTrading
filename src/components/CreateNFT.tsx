import React, { useState, ChangeEvent } from "react";
import { isAdmin } from "./isAdmin";
import axios from "axios";
import SiteHeader from "./Siteheader";
import FooterNFT from "./FooterNFT";
// import { connectWallet, getAccount } from "../utils/wallet";
// import { wallet } from "../utils/wallet";


const CreateNFT: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [heading, setHeading] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const userWalletAddress = 'tz1Tve8tP2pbCJKXVhJpyhM1AD9qiaGHC9yZ';
  // const userWalletAddress = getAccount();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleHeadingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    if (!isAdmin(userWalletAddress)) {
      alert('User is not authorized to upload.');
      return;
    }
    try {
      if (!file) {
        console.error("No file selected.");
        return;
      }
      if (!heading.trim() || !description.trim()) {
        alert("Please fill in all the fields.");
        return;
      }

      console.log("File name:", file.name);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("heading", heading);
      formData.append("description", description);

    const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `76d92b17caf26289fe6c`,  
          pinata_secret_api_key: `91d3521125be00147dc0ff64096ab8706c7533c236bfc9114a47618c5a470090`,
          "Content-Type": "multipart/form-data",
        },
      });

    const DataHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    console.log(`The IPFS hash for this image is ${DataHash}`)  //to check

      if (response) {
        alert("File uploaded successfully!");

        setFile(null);
        setHeading("");
        setDescription("");
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
    <SiteHeader/>
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>Create NFT</h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        <div>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "200px",
              height: "200px",
              border: "2px solid #000",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold",
              overflow: "hidden", // Ensure that the file box doesn't stretch vertically
            }}
          >
            Upload
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            {file && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "1rem", fontWeight: "bold", margin: "8px 0" }}>
                  {file.name}
                </span>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded Preview"
                  style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px", marginTop: "8px" }}
                />
              </div>
            )}
          </label>
        </div>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Heading"
            value={heading}
            onChange={handleHeadingChange}
            style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description"
            rows={4}
            style={{ width: "100%", height: "150px", padding: "0.5rem" }}
          />
        </div>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: '110px'  //to be changed
        }}
        onClick={handleUpload}
      >
        Create
      </button>
    </div>
    <FooterNFT/>
    </div>

  );
};

export default CreateNFT;
