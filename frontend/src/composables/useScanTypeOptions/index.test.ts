import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import storeConfig from "@/stores/config";
import { useScanTypeOptions } from "./index";

vi.mock("vue-i18n");

describe("useScanTypeOptions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("lists every scan type, discovery first, each with its description", () => {
    const options = useScanTypeOptions().value;

    expect(options.map((o) => o.value)).toEqual([
      "new_platforms",
      "quick",
      "unmatched",
      "update",
      "hashes",
      "complete",
    ]);
    expect(options[1]).toEqual({
      title: "scan.quick-scan",
      subtitle: "scan.quick-scan-desc",
      value: "quick",
    });
  });

  it("offers export-only when either metadata export is enabled", () => {
    storeConfig().config.PEGASUS_AUTO_EXPORT_ON_SCAN = true;

    const options = useScanTypeOptions().value;

    expect(options.at(-1)).toEqual({
      title: "scan.export-files",
      subtitle: "scan.export-files-desc",
      value: "export",
    });
  });
});
