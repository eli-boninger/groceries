interface Props {
  header: string;
  text: string;
}

function Alert({ header, text }: Props) {
  return (
    <div className="max-w-4xl mx-auto my-2 box-border">
      <div className="p-4 bg-yellow-50 rounded-md">
        <div className="flex">
          <div className="ml-3">
            <h3 className="color-yellow-800 font-medium text-sm">{header}</h3>
            <div className="collor-yellow-700 text-sm mt-2">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
