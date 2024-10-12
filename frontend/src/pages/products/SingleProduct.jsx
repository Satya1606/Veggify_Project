/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";

export default function SingleProduct() {
  const items = useLoaderData();

  const extractNumber = (timeString) => {
    let timeArray = timeString.split("");
    return parseInt(timeArray[0]) * 10 + parseInt(timeArray[1]);
  };

  let prepTimeMinutes = extractNumber(items?.more.prep_time);
  let cookTimeMinutes = extractNumber(items?.more.cook_time);
  const totalTime = prepTimeMinutes + cookTimeMinutes;

  // Function to split instructions by the numbered steps
  const splitInstructions = (instructions) => {
    return instructions.split(/(?=\d+\.\s)/); // Split before each digit followed by a dot
  };

  const instructionsArray = splitInstructions(items.instructions).map(
    (instruction) => instruction.trim()
  );

  return (
    <section className="min-h-screen flex justify-center items-center bg-light-gray p-8">
      <article className="bg-white shadow-xl rounded-lg md:w-2/3 lg:w-1/2">
        <div className="md:py-8 py-6">
          <picture>
            <img
              className="w-full max-w-[80%] md:h-[350px] h-auto object-cover rounded-xl mx-auto"
              src={items.thumbnail_image}
              alt={items.name}
            />
          </picture>
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold text-secondary mb-4">
              {items.name}
            </h1>
            <p className="text-lg text-gray-600">Let's make it.</p>

            <article className="bg-rose-100 mt-6 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-secondary">
                Preparation time
              </h3>
              <ul className="list-disc mt-4 ml-8 text-lg marker:text-rose-500">
                <li className="pl-3">
                  <p>
                    <span>
                      Total: <span>{totalTime} Minutes</span>
                    </span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>
                      Preparation: <span>{items.more.prep_time}</span>
                    </span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>
                      Cooking: <span>{items.more.cook_time}</span>
                    </span>
                  </p>
                </li>
              </ul>
            </article>

            <div className="mt-3">
              {" "}
              {/* Reduced margin further from mt-4 to mt-3 */}
              <h3 className="text-xl font-semibold">Ingredients</h3>
              <ul className="list-disc marker:text-blue-500 mt-3 ml-6 text-gray-700">
                {items?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient.name}:</span>
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-8 py-5">
            <h3 className="text-xl font-semibold text-secondary">
              Instructions
            </h3>
            <ul className="list-disc marker:text-blue-500 mt-2 ml-6 text-gray-700">
              {" "}
              {/* Maintained tight mt-2 margin */}
              {instructionsArray.map((instruction, index) => (
                <li key={index} className="mt-2">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
