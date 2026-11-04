import { computed, type ComputedRef } from "vue";
import { useI18n } from "vue-i18n";
import storeConfig from "@/stores/config";
import type { ScanTypeOption } from "@/types/scan";

export function useScanTypeOptions(): ComputedRef<ScanTypeOption[]> {
  const { t } = useI18n();
  const configStore = storeConfig();
  return computed(() => [
    {
      title: t("scan.new-platforms"),
      subtitle: t("scan.new-platforms-desc"),
      value: "new_platforms",
    },
    {
      title: t("scan.quick-scan"),
      subtitle: t("scan.quick-scan-desc"),
      value: "quick",
    },
    {
      title: t("scan.unmatched-games"),
      subtitle: t("scan.unmatched-games-desc"),
      value: "unmatched",
    },
    {
      title: t("scan.update-metadata"),
      subtitle: t("scan.update-metadata-desc"),
      value: "update",
    },
    {
      title: t("scan.hashes"),
      subtitle: t("scan.hashes-desc"),
      value: "hashes",
    },
    {
      title: t("scan.complete-rescan"),
      subtitle: t("scan.complete-rescan-desc"),
      value: "complete",
    },
    ...(configStore.config.GAMELIST_AUTO_EXPORT_ON_SCAN ||
    configStore.config.PEGASUS_AUTO_EXPORT_ON_SCAN
      ? [
          {
            title: t("scan.export-files"),
            subtitle: t("scan.export-files-desc"),
            value: "export" as const,
          },
        ]
      : []),
  ]);
}
