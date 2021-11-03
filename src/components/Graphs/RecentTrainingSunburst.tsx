import { FC, useRef, useEffect } from "react";
import * as d3 from "d3";

const SIZE = 975;
const RADIUS = SIZE / 2;

interface Data {
  name: string;
  value?: number;
}

const RecentTrainingSunburst: FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const data: Data[] = [];
  const partition = (data: Data) =>
    d3.partition<Data>().size([2 * Math.PI, RADIUS])(
      d3
        .hierarchy(data)
        .sum((d) => d.value!)
        .sort((a, b) => b.value! - a.value!)
    );

  const format = d3.format(",d");

  const arc = d3
    .arc<d3.HierarchyRectangularNode<Data>>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(RADIUS / 2)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1);
  const getAutoBox = () => {
    if (!svgRef.current) {
      return "";
    }
    const { x, y, width, height } = svgRef.current.getBBox();
    return [x, y, width, height].toString();
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const root = d3.partition();
  });

  return <svg ref={svgRef} height={SIZE} width={SIZE} />;
};

export default RecentTrainingSunburst;
