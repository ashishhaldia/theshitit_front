const ColorLegend = ({
  colorScale,
  tickSpacing = 25,
  tickSize = 10,
  tickTextOffset = 20,
  onHover,
}) =>
  colorScale.domain().map((domainvalue, i) => {
    return (
      <g
        className="tick"
        key={i}
        transform={`translate(0,${i * tickSpacing})`}
        onMouseEnter={() => {
          onHover(domainvalue);
        }}
        onMouseOut={() => {
          onHover(null);
        }}
      >
        <circle fill={colorScale(domainvalue)} r={tickSize} />
        <text className="tick" x={tickTextOffset} dy=".32em">
          {domainvalue}
        </text>
      </g>
    );
  });
export default ColorLegend;
