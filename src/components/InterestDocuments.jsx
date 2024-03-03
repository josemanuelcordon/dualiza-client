import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const InterestDocuments = () => {
  const handleDownload = () => {
    // URL del archivo PowerPoint almacenado en el frontend
    const pptxUrl = "./guia.pptx";

    const link = document.createElement("a");
    link.href = pptxUrl;
    link.setAttribute("download", "guía_de_buenas_prácticas.pptx");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex justify-between items-center">
      <p>1. Guía de buenas prácticas</p>
      <Button
        type="primary"
        className="bg-customBlue"
        icon={<DownloadOutlined />}
        size="large"
        onClick={handleDownload}
      >
        Descargar
      </Button>
    </div>
  );
};

export default InterestDocuments;
