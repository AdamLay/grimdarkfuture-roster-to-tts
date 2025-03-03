import { state } from "../state";
import { useSnapshot } from "valtio";

export const OutputOptions = () => {
  const stateView = useSnapshot(state, { sync: true });
  return (
    <details className="">
      <summary className="cursor-pointer">Output Options</summary>
      <div className="py-2 px-4 bg-stone-100 space-y-4">
        <label className="flex flex-row items-center space-x-4">
          <input
            checked={stateView.ttsOutputConfig.includeFullSpecialRulesText}
            className="w-5 h-5"
            type="checkbox"
            onChange={(e) => {
              state.ttsOutputConfig.includeFullSpecialRulesText =
                !stateView.ttsOutputConfig.includeFullSpecialRulesText;
            }}
          />
          <div>
            <p className="font-bold">Include Full Special Rules Text</p>
            <p className="text-xs">
              If enabled, the TTS "descripton" output will include the full
              rules text for each special rule on a model. If disabled, only the
              special rule's name will be included.
            </p>
          </div>
        </label>

        <label className="flex flex-row items-center space-x-4">
          <input
            checked={
              stateView.ttsOutputConfig.useShorterVersionOfCoreSpecialRules
            }
            className="w-5 h-5"
            type="checkbox"
            onChange={(e) => {
              state.ttsOutputConfig.useShorterVersionOfCoreSpecialRules =
                !stateView.ttsOutputConfig.useShorterVersionOfCoreSpecialRules;
            }}
          />
          <div>
            <p className="font-bold">
              Use Shortened Version of Core Special Rules Text
            </p>
            <p className="text-xs">
              If enabled, special rule's text for "core" special rules will be a
              "shortened" version of that rule, to stop the TTS description
              being super long on models that have lots of special rules.
              Disable this to output the full special rules text.
            </p>
          </div>
        </label>

        <label className="flex flex-row items-center space-x-4">
          <input
            className="border border-stone-500 px-2 py-1 w-20"
            value={stateView.ttsOutputConfig.modelWeaponOutputColour}
            onChange={(e) => {
              state.ttsOutputConfig.modelWeaponOutputColour =
                e.currentTarget.value;
            }}
          />
          <div>
            <p className="font-bold">Model Weapon Output Colour</p>
            <p className="text-xs">
              HEX code for the model's weapons details in the TTS output.
            </p>
          </div>
        </label>
        <label className="flex flex-row items-center space-x-4">
          <input
            className="border border-stone-500 px-2 py-1 w-20"
            value={stateView.ttsOutputConfig.modelSpecialRulesOutputColour}
            onChange={(e) => {
              state.ttsOutputConfig.modelSpecialRulesOutputColour =
                e.currentTarget.value;
            }}
          />
          <div>
            <p className="font-bold">Model Special Rules Output Colour</p>
            <p className="text-xs">
              HEX code for the model's special rules details in the TTS output.
            </p>
          </div>
        </label>
      </div>
    </details>
  );
};
