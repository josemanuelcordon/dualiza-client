import React from "react";
import { Card, List } from "antd";
const data = [
  {
    title: "Detectores de presencia",
    content:
      "Instalación de detectores de presencia para automatizar el encendido y apagado de los sistemas de iluminación.",
  },
  {
    title: "Programar apagado de ordenadores",
    content:
      "Programar los ordenadores para que se apaguen automáticamente cuando finalice la jornada laboral. Y para que pases a hibernación o suspensión transcurrido un tiempo.",
  },
  {
    title: "Tecnología LED",
    content:
      "Sustituir las lámparas existentes por lámparas de tecnología LED.",
  },
  {
    title: "Optimización de la potencia",
    content:
      "Optimizar la potencia contratada en base al consumo real de energía (si es posible).",
  },
  {
    title: "Cambio de comercializadora",
    content:
      "Cambiar la comercializadora para optimizar e	l coste del KWh (si es posible).",
  },
  {
    title: "Señalización",
    content:
      "Señalizar en la puerta de salida “Revisar que todos los receptores se han apagado”.",
  },
];

const ElectricInstallation = () => {
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card className="w-full" title={item.title}>
            {item.content}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ElectricInstallation;
